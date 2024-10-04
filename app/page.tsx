import React from "react";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <Card Name='Alizah Fatima' Age={17} RollNo={24567} Class='XII' imageUrl="https://img.freepik.com/premium-vector/woman-with-long-hair-brown-jacket-is-smiling-white-background-with-woman-suit_955834-70712.jpg"/> <br/>
      <Card Name='Sara Fatima' Age={18} RollNo={67921} Class='XII' imageUrl="https://st5.depositphotos.com/23404642/73149/v/450/depositphotos_731494074-stock-illustration-portrait-smiling-teen-student-girl.jpg"/> <br/>
      <Card Name='Anaya Fatima' Age={17} RollNo={89054} Class='XII' imageUrl="https://img.freepik.com/premium-vector/beautiful-young-asian-student-isolated-white-background_955834-87044.jpg" />
    </>
  );
}
