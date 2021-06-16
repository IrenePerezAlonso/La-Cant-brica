import React from 'react';
import './recipes.css';

function Recipes() {
  return (
    <>
      <div className="recipes">
        <h1 className="recipes-title">recetas</h1>
        <div className="recipes-merluza">
          <h2 className="recipes-merluza__title">merluza en salsa</h2>
          <div className="recipes-merluza__info">
            <img src="https://i.blogs.es/bb1db2/merluza_salsa_verde/450_1000.jpg" alt="merluza en salsa" />
            <p className="recipes-merluza__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                Merluza en rodajas.........................................................4
                Cebolla....................................................................125 g
                Dientes de ajo.............................................................2
                Vino blanco................................................................100 ml
                Caldo de pescado o fumet...................................................200 ml
                Harina de trigo............................................................10 g
                Aceite de oliva virgen extra
                Sal
                Perejil fresco (en abundancia)
                Almeja fina (opcional).....................................................12
                Espárragos blancos en conserva (opcional)..................................4
              </p>
            </p>
          </div>
          <p className="recipes-merluza__preparation">
            Pelamos y picamos los dientes de ajo y los rehogamos
            en una cazuela baja con cuidado de que no se quemen
            (para que no amarguen el resultado final).
            Añadimos la cebolla rallada y sofreímos a fuego muy
            suave hasta que esté bien pochada y translúcida.
            Añadimos la cucharada de harina, removemos bien y
            rehogamos durante un par de minutos.
            Vertemos el vino blanco y el caldo, removemos para que no se formen
            grumos con la harina y dejamos cocer durante diez minutos para que
            se trabe bien la salsa. Mientras tanto picamos un buen puñado de hojas
            de perejil fresco y las añadimos a la cazuela junto con las rodajas de
            merluza, previamente salpimentadas, y las almejas (en caso de usarlas).
            Para que la merluza se cueza más rápido, tapamos la cazuela y dejamos
            cocer a fuego medio durante cinco minutos o hasta que las almejas se
            hayan abierto y la merluza esté lista (esto dependerá del grosor de las rodajas).
            Escurrimos los espárragos (si los usamos) y los cortamos en tres trozos, decoramos
            con ellos cada plato antes de servir.
          </p>
        </div>
        <hr />
        <div className="recipes-bonito">
          <h2 className="recipes-bonito__title">bonito en salsa de tomate</h2>
          <div className="recipes-bonito__info">
            <img src="https://live.mrf.io/statics/i/ps/www.cocinacaserayfacil.net/wp-content/uploads/2018/09/Bonito-con-tomate-1.jpg?width=1200&enable=upscale" alt="bonito en salsa" />
            <p className="recipes-bonito__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                Bonito fresco.............................................................500 g
                Pimiento verde............................................................1
                Cebolla mediana...........................................................1
                Diente de ajo.............................................................2
                Guindilla de Cayena.......................................................1
                Salsa de tomate
                Sal
                Aceite de oliva virgen extra
              </p>
            </p>
          </div>
          <p className="recipes-bonito__preparation">
            Lavamos, limpiamos de escamas y sangre, y secamos el bonito.
            En una cazuela con un poco de aceite de oliva lo marcamos unos segundos por cada lado,
            retiramos a un plato, sacamos las espinas y la piel, salamos y reservamos.
            En la misma cazuela, añadimos un poco más de aceite si fuese necesario,
            pochamos la cebolla, el pimiento y el ajo troceados junto a la guindilla.
            Agregamos la salsa de tomate, suficiente para que cubra el bonito y dejamos que se
            haga la mezcla durante 20 minutos. Retiramos la guindilla, pasamos la salsa por el
            pasapurés y la volvemos a la cazuela.
            Echamos el bonito y lo dejamos hacer durante un minuto a fuego bajo. Retiramos la
            cazuela del fuego, dejamos que repose un par de minutos y servimos inmediatamente
            para que el bonito no se seque.
          </p>
        </div>
        <hr />
        <div className="recipes-gambas">
          <h2 className="recipes-gambas__title">gambas al ajillo</h2>
          <div className="recipes-gambas__info">
            <img src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/94AF9570-D42C-43E7-A50A-D918C9D71A1D/Derivates/40AB004F-F245-47AD-BAAB-CFDFACD3E37C.jpg" alt="gambas al ajillo" />
            <p className="recipes-gambas__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                Gambas..............................................................1 kg
                Dientes de ajo......................................................20
                Guindillas secas....................................................2
                Aceite de oliva virgen extra  (20 cucharadas aprox.)
                Sal y pimienta negra recién molida (al gusto)
                Opcional:
                1 chorrito de vino blanco o incluso un toque de vinagre de Jerez.
                Y si queréis decorar un poco de perejil fresco picado.
              </p>
            </p>
          </div>
          <p className="recipes-gambas__preparation">
            En una cazuela (de barro si tenéis, sino en una de las que tengáis en casa)
            y ponemos el aceite de oliva virgen extra con las guindillas. Pelamos los dientes
            de ajo y cortamos en rodajas finitas.
            Calentamos y doramos los dientes de ajo laminados, que se doren,
            no queremos que nos den un sabor quemado.
            Un truco es retirar estos ajos (casi chips) y seguir con la receta,
            se incorporarían al final del todo. Así logramos el ajo en su punto y
            se hidrata con parte del caldo que suelta la gamba.
            La perfección en las gambas al ajillo.
            Echamos las gambas previamente escurridas al aceite. Subimos la temperatura
            y salpimentamos al gusto. En un minuto el aceite cambiará de color, no os asustéis,
            la gamba suelta su caldo y con la temperatura, emulsiona.
            Añadimos las guindillas y los ajos. Removemos e juntamos sabores.
            Servimos inmediatamente en cuanto esté la gamba en su punto justo de cocción,
            jugosa y con ese punto picante delicioso. No os queméis, el aceite va casi hirviendo.
            Acompañarlas de un buen pan y un buen vino blanco bien fresquito.
          </p>
        </div>
        <hr />
        <div className="recipes-dorada">
          <h2 className="recipes-dorada__title">dorada al horno</h2>
          <div className="recipes-dorada__info">
            <img src="https://i.pinimg.com/736x/b1/3c/8f/b13c8f264812537de6b0ad47ebd1a171.jpg" alt="dorada al horno" />
            <p className="recipes-dorada__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                2 doradas de ración (600 g. aprox. cada una)
                patatas grandes...................................................................4
                cebollas grande...................................................................2
                dientes de ajo....................................................................3
                vasos de vino blanco..............................................................2
                Aceite de oliva virgen extra
                Unas hebras de azafrán
                Sal
                Un poco de perejil fresco
                ½ limón
              </p>
            </p>
          </div>
          <p className="recipes-dorada__preparation">
            Limpiamos las doradas de vísceras y escamas.
            Esta operación podemos pedírsela a pescadero que hará la mayor parte del trabajo.
            Retiramos la cabeza y salamos el pescado por el interior. Reservamos.
            Pelamos las patatas, las lavamos y las cortamos en rodajas finas.
            Calentamos un chorrito de aceite de oliva en una sartén y cuando esté bien caliente
            añadimos las patatas cortadas. Freímos las patatas hasta que comiencen a dorarse.
            Retiramos las patatas con una espumadera a un plato y reservamos.
            Las patatas terminarán de hacerse después,
            junto con el resto de ingredientes en el horno.
            Pelamos las cebollas y los ajos y los cortamos en brunoise, en daditos pequeños.
            En una sartén grande calentamos un chorrito de aceite de oliva,
            podemos utilizar el que nos haya sobrado de freír las patatas una vez limpio y colado.
            Rehogamos las verduras hasta que comiencen a dorarse.
            En este momento añadimos el vaso de vino, las hebras de azafrán,
            el perejil bien picadito y salamos. Dejamos cocer unos 8 minutos.
          </p>
        </div>
        <hr />
        <div className="recipes-salmon">
          <h2 className="recipes-salmon__title">salmon al papillote</h2>
          <div className="recipes-salmon__info">
            <img src="https://www.cocinaabuenashoras.com/files/salmon-en-papillote-11.jpg" alt="salmon al papillote" />
            <p className="recipes-salmon__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                Cebolla............................................................100 g
                Pimiento verde italiano............................................1
                Zanahoria..........................................................2
                Salmón fresco......................................................200 g
                Pimienta negra molida y sal al gusto
              </p>
            </p>
          </div>
          <p className="recipes-salmon__preparation">
            Lo primero que necesitamos es ir cortando todas las verduras que vamos a
            utilizar para hacer con el salmón en el papillote. Lo ideal es cortar todas
            ellas en bastones o tiras de tamaño similar.
            El corte en juliana nos vale para pimientos, zanahorias o cebolla,
            y para casi todas las hortalizas que podamos utilizar.
            Si tenemos un estuche de silicona, ponemos las verduras cortadas en el fondo.
            Añadimos un pellizco de sal, un chorrito de vino blanco,
            un chorrito de aceite de oliva y un chorrito de agua. Si no tenemos estuche,
            lo tenemos que hacer nosotros con papel de horno.
            Cortamos una pieza de aproximadamente 60x30 cm y la doblamos por la mitad.
            Ponemos sobre un lado la verdura y la sazonamos.
            Después colocamos el salmón cortado en trozos de unos 50 o 60 g sobre la verdura,
            procediendo a cerrar el estuche de silicona o a cerrar el estuche de papel de
            horno mediante unos pliegues que aseguren que vaya a quedar más o menos hermético.
          </p>
        </div>
        <hr />
        <div className="recipes-cigalas">
          <h2 className="recipes-cigalas__title">cigalas a la plancha</h2>
          <div className="recipes-cigalas__info">
            <img src="https://elmundoenrecetas.s3.amazonaws.com/uploads/recipe/main_image/541/Como_abrir_una_cigala.jpg" alt="cigalas a la plancha" />
            <p className="recipes-cigalas__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                Cigalas frescas (medianas)..........................................1 kg
                Para el aderezo: 2 dientes de ajo
                Perejil fresco picado (2 cucharadas)
                Aceite de oliva virgen extra (5 cucharadas)
                Vino blanco (1 cucharada)
                Sal gorda o en escamas (al gusto)
              </p>
            </p>
          </div>
          <p className="recipes-cigalas__preparation">
            En ocasiones veréis las cigalas a la plancha presentadas en dos partes,
            cortadas por la mitad como en el caso de un bogavante o cigala
            (mejor hacerlas enteras, quedan más jugosas).
            El proceso es muy sencillo, poniendo atención solamente en el
            tiempo de preparación, para no “machacar” el marisco. Si nos pasamos de tiempo
            luego no nos sabrán a nada.
            Preparamos el aderezo. En un tazón vamos añadiendo el ajo y el
            perejil bien picado, 5 cucharadas de aceite de oliva virgen extra,
            más una de vino blanco. Mezclamos bien.
            Un truco que uso yo a menudo es pasar el aderezo a un bote de cristal.
            Lo cierro y lo agito con movimientos arriba-abajo.
            De esta manera emulsiona la mezcla y queda en una textura melosa,
            perfecta para añadir al marisco.
          </p>
        </div>
        <hr />
        <div className="recipes-almejas">
          <h2 className="recipes-almejas__title">almejas a la marinera</h2>
          <div className="recipes-almejas__info">
            <img src="https://lacocinademasito.com/wp-content/uploads/Almejas-a-la-marinera-24.jpg" alt="almejas a la marinera" />
            <p className="recipes-almejas__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                Almejas..............................................................600 g
                Cebolla media........................................................0.5
                Dientes de ajo.......................................................1
                Guindilla............................................................0.5
                Harina de trigo......................................................20 g
                Pimentón dulce.......................................................10 g
                Tomate frito casero..................................................15 ml
                Vino de Jerez........................................................100 ml
                Laurel
                Perejil fresco
                Aceite de oliva virgen extra
              </p>
            </p>
          </div>
          <p className="recipes-almejas__preparation">
            Dejamos las almejas en remojo durante 2 horas al menos, en una cacerola con
            agua abundante y una cuchara de sal gorda para que las almejas suelten la
            arena que puedan tener. Es conveniente cambiar el agua cada media hora.
            A continuación, abrimos las almejas, poniéndolas al vapor sobre una cazuela
            con un vaso de agua, una cucharadita de sal gruesa y una hoja de laurel.
            Según se vayan abriendo, retiramos las almejas y las reservamos.
            Si no tenéis un utensilio para cocer al vapor, podéis usar una cacerola
            que tenga tapa y un colador grande que pueda contener las almejas.
            En una sartén vamos haciendo el sofrito, pochando a fuego lento en aceite
            de oliva virgen extra la media cebolla, la guindilla y el diente de ajo
            muy muy picados, hasta que prácticamente se deshagan. Añadimos el pimentón
            y la harina y removemos rápidamente haciendo una pasta o roux.
            Seguidamente, incorporamos el vino de Jerez y removemos hasta que evapore su alcohol.
            A continuación añadimos el tomate frito y el agua de haber abierto las almejas que
            habremos colado previamente. Probamos y rectificamos de sal.
            Dejamos que se reduzca durante unos 5 minutos y metemos en la sartén las
            almejas que teníamos abiertas y reservadas. Dejamos otros 3 ó 4 minutos hasta
            que la salsa alcance el punto de espesor que nos guste y apagamos el fuego.
          </p>
        </div>
        <hr />
        <div className="recipes-sepia">
          <h2 className="recipes-sepia__title">sepia a la plancha</h2>
          <div className="recipes-sepia__info">
            <img src="https://solorecetas.com/wp-content/uploads/2016/11/sepia-a-la-plancha.jpg" alt="sepia a la plancha" />
            <p className="recipes-sepia__info-ingredients">
              <p>Ingredientes:</p>
              <p>
                sepias.............................................................2
                dientes de ajo.....................................................4-6
                Sal
                Pimienta recién molida
                Perejil fresco
                Aceite de oliva virgen extra
              </p>
            </p>
          </div>
          <p className="recipes-sepia__preparation">
            Lo primero es limpiar la sepia, para ello hacemos un corte a lo largo y extraemos
            la parte dura o pluma, así como todo el interior. Ponemos la sepia debajo del grifo,
            eliminamos todos los restos del interior y retiramos la piel. Cortamos las patas o
            tentáculos a la altura de los ojos y los desechamos; en el centro de los tentáculos
            está la boca o pico que también desechamos. Una vez limpia la sepia,
            que podéis encontrar ya limpia, escurrimos y secamos muy bien.
            Cortamos en trozos pequeños de bocado y reservamos.
            En un cuenco ponemos el ajo y el perejil picados finamente,
            un poco de pimienta recién molida, sal y un chorreón de aceite de oliva virgen extra,
            lo mezclamos todo bien con un tenedor y reservamos.
            También podemos machacarlo todo con un mortero.
            Ponemos la plancha o la sartén y dejamos que se caliente mucho;
            añadimos la sepia, dejamos cocinar un poco y cuando notemos que comienza a cambiar
            de color vertemos por encima el aliño de ajo y perejil, salteamos y en cuanto esté
            dorada la sepia así como los ajos servimos inmediatamente, ya que está rica recién hecha
          </p>
        </div>
      </div>
    </>
  );
}

export default Recipes;
