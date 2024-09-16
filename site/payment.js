function createPaymentScreen(item, price) {
    const style = `<style>
  .payment-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .payment-form h2 {
    color: #023047;
    margin-bottom: 20px;
  }

  .input-group {
    margin-bottom: 10px;
  }

  #cardPaymentBrick_container {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .message {
    margin-top: 20px;
    color: #ffb703;
  }
</style>
`
    const div = `<div id="payment-form" class="payment-form">
  <h2>Complete Your Payment</h2>
  <div id="cardPaymentBrick_container" class="input-group"></div>
  <div id="message" class="message"></div>
</div>
`;

    return style + div
  }
  
  const mp = new MercadoPago('TEST-ea4efab0-e65e-4ac4-af09-e9ee8a50d110', {
    locale: 'es-AR'
  });
  
  const bricksBuilder = mp.bricks();
  
  const renderCardPaymentBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        amount: 100, // monto a ser pagado
        payer: {
          email: "",
        },
      },
      customization: {
        visual: {
          style: {
            customVariables: {
              theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
            }
          }
        },
        paymentMethods: {
          maxInstallments: 1,
        }
      },
      callbacks: {
        onReady: () => {
          // callback llamado cuando Brick esté listo
        },
        onSubmit: (cardFormData) => {
          // callback llamado cuando el usuario haga clic en el botón para enviar los datos
          return new Promise((resolve, reject) => {
            fetch("/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(cardFormData)
            })
            .then((response) => {
              // recibir el resultado del pago
              resolve();
            })
            .catch((error) => {
              // tratar respuesta de error al intentar crear el pago
              reject();
            })
          });
        },
        onError: (error) => {
          // callback llamado para todos los casos de error de Brick
        },
      },
    };
    window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
  };

  renderCardPaymentBrick(bricksBuilder);
  