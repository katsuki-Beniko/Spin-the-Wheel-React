function sendMessageToUnity() {
    if (unityInstance) {
        const data = { prize: 1 };
        console.log("Sending data to Unity:", JSON.stringify(data));
        unityInstance.SendMessage('Data Receiver', 'ReceiveDataFromJavaScript', JSON.stringify(data));
    } else {
        console.log("Unity instance is not available yet.");
    }
}

useEffect(() => {
    window.onUnityMessage = (message) => {
      console.log(message);
      // Handle the message from Unity
    };
  }, []);
  