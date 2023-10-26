const addDataToFirestore = async () => {
  try {
    const collectionRef = db.collection("yourCollectionName");
    await collectionRef.add({
      // Your data goes here
      key1: "value1",
      key2: "value2",
    });
    console.log("Data added to Firestore successfully.");
  } catch (error) {
    console.error("Error adding data to Firestore: ", error);
  }
};

// Call this function to add data to Firestore
addDataToFirestore();
