const {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
} = require('./usersController')();
const User = require('../model/usersModel');

jest.mock('../model/usersModel');

describe('Given a getAll function', () => {
    test('Should get all users', async () => {
        const res = {
            json: jest.fn(),
        };
        User.find.mockResolvedValueOnce([{ name: 'Pepa' }]);

        await getAll(null, res);

        expect(res.json).toHaveBeenCalledWith([{ name: 'Pepa' }]);
    });
});

describe('Given a createOne function', () => {
    class MockUser {
        constructor(name){
            this.name = name;
        }
        save() {}
    }
    test('Should call json', async () => {
        const req = {
            body: null
        };
        const res = {
            json: jest.fn(),
            send: jest.fn()
        };
        const newUser = new MockUser('user name');
        User.mockReturnValueOnce(newUser);

        await createOne(req, res);

        expect(res.json).toHaveBeenCalledWith({ name: 'user name' });
    });
    test('Should call send', async () => {
        const req = {
            body: null
        };
        const res = {
            json: jest.fn(),
            send: jest.fn()
        }; 
        User.mockReturnValueOnce({
            save: jest.fn().mockRejectedValueOnce('error'),
        });

        await createOne(req, res);

        expect(res.send).toHaveBeenCalledWith('error');
    });
});

describe('Given a getById function', () => {
    test('Should call res.status with 404', async () => {
        const res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
        };
        const req = {
            params: {
              userId: null,
            },
        };
        User.findById.mockRejectedValueOnce();

        await getById(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
    });
    test('Should call res.send with error', async () => {
        const res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };
        const req = {
            params: {
              userId: null,
            },
        };
        User.findById.mockRejectedValueOnce('error');

        await getById(req, res);

        expect(res.send).toHaveBeenCalledWith('error');
    });
    test('Should call res.json', async () => {
        const res = {
            json: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
          };
        const req = {
            params: {
                userId: null,
            },
        };
        User.findById.mockResolvedValueOnce('one user');

        await getById(req, res);

        expect(res.json).toHaveBeenCalledWith('one user');
    });
});

describe('Given a updateById function', () => {
    test('Should call res.json', async () => {
        const res = {
            json: jest.fn(),
            send: jest.fn(),
          };
        const req = {
            params: {
                userId: null,
            },
            body: {},
        };

        await updateById(req, res);

        expect(res.json).toHaveBeenCalled();
    });
    test('Should call res.send', async () => {
        const res = {
            json: jest.fn(),
            send: jest.fn(),
          };
        const req = {
            body: null,
            params: {
              userId: null,
            },
        };
        User.findByIdAndUpdate.mockRejectedValueOnce('error when looking for the user');

        await updateById(req, res);

        expect(res.send).toHaveBeenCalledWith('error when looking for the user');
    });
});

describe('Given a deleteById function', () => {
    test('Should call json', async () => {
        const res = {
            status: jest.fn(),
            json: jest.fn(),
            send: jest.fn(),
          };
        const req = {
            params: {
                userId: null,
            },
        };

        await deleteById(req, res);

        expect(res.json).toHaveBeenCalled();
    });
    test('Should call status with 204', async () => {
        const res = {
            status: jest.fn(),
            json: jest.fn(),
            send: jest.fn(),
          };
        const req = {
            params: {
                userId: null,
            },
        };

        await deleteById(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
    });
    test('Should fail and call res.send with error', async () => {
        const req = {
            params: {
                userId: null,
            },
          };
        const res = {
            status: jest.fn(),
            json: jest.fn(),
            send: jest.fn(),
        };
        User.findByIdAndDelete.mockRejectedValueOnce('error');

        await deleteById(req, res);

        expect(res.send).toHaveBeenCalledWith('error');
    });
});