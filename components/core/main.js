import main from './main.module.css';

export function Main() {
  return (
    <main className={main.container}>
      <div className={main.Rectangle}>
        <div className="container-fluid">
          <div className="row ">
            <span className={main.text_Style_2}>
              Vende tu casa
              <br /> en un{' '}
              <span className={main.text_style_1}>
                clic
                <br />
              </span>
            </span>
            <span>
              <img
                src="img/bitmap.png"
                srcSet="img/bitmap@2x.png 2x,
                            img/bitmap@3x.png 3x"
                className={main.img_Bitmap}
              />
            </span>
          </div>
          <div className="row ">
            <div className={main.Rectangle_2}>
              <form>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value="Introduce la dirección de tu casa o piso"
                />
              </form>
              <div class={main.Rectangle_3}>
                <span class={main.text_style_6}>
                  <button type="button" class="btn btn-primary">
                    VENDER MI INMUEBLE
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={main.Rectangle_4}>
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <span class={main.En_Clicaca}>En Clicaca sólo hay ventajas</span>
          </div>
        </div>
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <span className={main.Lorem_2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-3 d-flex justify-content-center">
            <img
              src="img/if-rotation-left-1814080.png"
              srcset="img/if-rotation-left-1814080@2x.png 2x,
             img/if-rotation-left-1814080@3x.png 3x"
            />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <img
              src="img/shape.png"
              srcset="img/shape@2x.png 2x,
             img/shape@3x.png 3x"
            />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <img
              src="img/paperplane.png"
              srcset="img/paperplane@2x.png 2x,
             img/paperplane@3x.png 3x"
            />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <img
              src="img/group-3.png"
              srcset="img/group-3@2x.png 2x,
             img/group-3@3x.png 3x"
            />
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-3 d-flex justify-content-center">
            <span className={main.Oferta}>Oferta en 24 h</span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className={main.Pago}>Pago inmediato</span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className={main.Ahrrate}>Ahórrate el papeleo</span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className={main.Fecha}>Tu eliges la fecha</span>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className={main.Rectangle_9}>
            <div className="col-3 d-flex justify-content-center">
              <span className={main.Lorem_3}>
                No te preocupes de su estado, ni de reparaciones para eneseñarlo
              </span>
            </div>
          </div>
          <div className={main.Rectangle_9}>
            <div className="col-3 d-flex justify-content-center">
              <span className={main.Lorem_3}>
                No te preocupes de su estado, ni de reparaciones para eneseñarlo
              </span>
            </div>
          </div>
          <div className={main.Rectangle_9}>
            <div className="col-3 d-flex justify-content-center">
              <span className={main.Lorem_3}>
                No te preocupes de su estado, ni de reparaciones para eneseñarlo
              </span>
            </div>
          </div>
          <div className={main.Rectangle_9}>
            <div className="col-3 d-flex justify-content-center">
              <span className={main.Lorem_3}>
                No te preocupes de su estado, ni de reparaciones para eneseñarlo
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={main.Rectangle_5}>
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <span class={main.En_Clicaca}>
              Vender tu piso nunca fue tan fácil
            </span>
          </div>
        </div>
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <span className={main.Lorem_2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </div>
        <div className={main.Rectangle_6}>
          <div className="row justify-content-between">
            <div className="col-3 d-flex justify-content-center">
              <img
                src="img/if-rotation-left-1814080.png"
                srcset="img/if-rotation-left-1814080@2x.png 2x,
             img/if-rotation-left-1814080@3x.png 3x"
              />
              <div className="col-3 d-flex justify-content-center">
                <span className={main.Oferta}>Oferta en 24 h</span>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <img
                src="img/shape.png"
                srcset="img/shape@2x.png 2x,
             img/shape@3x.png 3x"
              />
              <div className="col-3 d-flex justify-content-center">
                <span className={main.Pago}>Pago inmediato</span>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <img
                src="img/paperplane.png"
                srcset="img/paperplane@2x.png 2x,
             img/paperplane@3x.png 3x"
              />
              <div className="col-3 d-flex justify-content-center">
                <span className={main.Ahrrate}>Ahórrate el papeleo</span>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center">
              <img
                src="img/group-3.png"
                srcset="img/group-3@2x.png 2x,
             img/group-3@3x.png 3x"
              />
              <div className="col-3 d-flex justify-content-center">
                <span className={main.Fecha}>Tu eliges la fecha</span>
              </div>
            </div>
          </div>
        </div>
        <div className={main.img_group}>
          asdasd
          {/*  <img
            src="img/group.png"
            srcset="img/group@2x.png 2x,
             img/group@3x.png 3x"
            className={main.img.group2}
          /> */}
        </div>
        <div className={main.Rectangle_7}></div>
      </div>
      <div className={main.Rectangle_8}>
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <span class={main.En_Clicaca}>
              Trabajamos con las mejores empresas
            </span>
          </div>
        </div>
        <div className="row ">
          <div className="col d-flex justify-content-center">
            <span className={main.Lorem_2}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>
        </div>
        <div className="row gx-5 d-flex justify-content-center">
          <div className="col-3 d-flex justify-content-center">
            <img
              src="img/group-4.png"
              srcset="img/group-4@2x.png 2x,
             img/group-4@3x.png 3x"
            />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <img
              src="img/group-5.png"
              srcset="img/group-5@2x.png 2x,
             img/group-5@3x.png 3x"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
