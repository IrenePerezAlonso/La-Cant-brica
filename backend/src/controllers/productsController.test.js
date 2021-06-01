const {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  } = require('./productsController')();
  const Product = require('../model/productModel');

  jest.mock('../model/productModel');

  describe('Given a getAll function', () => {
      test('Should get all products', async () => {
        const res = {
            json: jest.fn(),
        };
        Product.find.mockResolvedValueOnce([{ name: 'Merluza' }]);

        await getAll(null, res);

        expect(res.json).toHaveBeenCalledWith([{ name: 'Merluza' }]);
      });
  });

  describe('Given a createOne function', () => {
      class MockProduct {
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
        const newProduct = new MockProduct('product name');
        Product.mockReturnValueOnce(newProduct);

        await createOne(req, res);

        expect(res.json).toHaveBeenCalledWith({ name: 'product name' });
    });
    test('Should call send', async () => {
        const req = {
            body: null
        };
        const res = {
            json: jest.fn(),
            send: jest.fn()
        }; 
        Product.mockReturnValueOnce({
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
              heroId: null,
            },
        };
        Product.findById.mockRejectedValueOnce();

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
              productId: null,
            },
        };
        Product.findById.mockRejectedValueOnce('error');

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
              heroId: null,
            },
        };
        Product.findById.mockResolvedValueOnce('one product');

        await getById(req, res);

        expect(res.json).toHaveBeenCalledWith('one product');
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
              heroId: null,
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
              productId: null,
            },
        };
        Product.findByIdAndUpdate.mockRejectedValueOnce('error when looking for the product');

        await updateById(req, res);

        expect(res.send).toHaveBeenCalledWith('error when looking for the product');
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
              heroId: null,
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
              heroId: null,
            },
        };

        await deleteById(req, res);

        expect(res.status).toHaveBeenCalledWith(204);
    });
    test('Should fail and call res.send with error', async () => {
        const req = {
            params: {
              heroId: null,
            },
          };
        const res = {
            status: jest.fn(),
            json: jest.fn(),
            send: jest.fn(),
        };
        Product.findByIdAndDelete.mockRejectedValueOnce('error');

        await deleteById(req, res);

        expect(res.send).toHaveBeenCalledWith('error');
    });
});