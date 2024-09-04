const CallbackPage = () => {
  const orderPizza = (name, callbackFn) => {
    console.log("Zahialgiig huleen awlaa");

    callbackFn(name);
  };

  const printDelivery = (message) => {
    console.log(
      `Tanii ${message} pizza belen bolloo! Tanii pizza hurgeltend garlaa`
    );
  };

  orderPizza("Mahand durlagsad", printDelivery);

  return <div>Callback page</div>;
};
export default CallbackPage;
