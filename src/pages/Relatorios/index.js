import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

import { Container } from "./styles";

class Relatorios extends Component {
  state = {
    columns: [
      { accessor: "name", Header: "Name" },
      { accessor: "sex", Header: "Sex" },
      { accessor: "city", Header: "City" },
      { accessor: "car", Header: "Car" }
    ],
    rows: [
      { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Robert",
        city: "Las Vegas",
        car: "Chevrolet Cruze"
      },
      { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
      { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Thomas",
        city: "Rio de Janeiro",
        car: "Honda Accord"
      },
      { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
      { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
      {
        sex: "Male",
        name: "Robert",
        city: "Los Angeles",
        car: "Honda Accord"
      },
      {
        sex: "Male",
        name: "William",
        city: "Los Angeles",
        car: "Honda Civic"
      },
      { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Robert",
        city: "Las Vegas",
        car: "Chevrolet Cruze"
      },
      { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
      { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Thomas",
        city: "Rio de Janeiro",
        car: "Honda Accord"
      },
      { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
      { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
      {
        sex: "Male",
        name: "Robert",
        city: "Los Angeles",
        car: "Honda Accord"
      },
      {
        sex: "Male",
        name: "William",
        city: "Los Angeles",
        car: "Honda Civic"
      },
      { sex: "Female", name: "Sandra", city: "Las Vegas", car: "Audi A4" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Male", name: "Mark", city: "Paris", car: "Honda Accord" },
      { sex: "Male", name: "Paul", city: "Paris", car: "Nissan Altima" },
      { sex: "Female", name: "Linda", city: "Austin", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Robert",
        city: "Las Vegas",
        car: "Chevrolet Cruze"
      },
      { sex: "Female", name: "Lisa", city: "London", car: "BMW 750" },
      { sex: "Male", name: "Mark", city: "Chicago", car: "Toyota Corolla" },
      {
        sex: "Male",
        name: "Thomas",
        city: "Rio de Janeiro",
        car: "Honda Accord"
      },
      { sex: "Male", name: "Robert", city: "Las Vegas", car: "Honda Civic" },
      { sex: "Female", name: "Betty", city: "Paris", car: "Honda Civic" },
      {
        sex: "Male",
        name: "Robert",
        city: "Los Angeles",
        car: "Honda Accord"
      },
      {
        sex: "Male",
        name: "William",
        city: "Los Angeles",
        car: "Honda Civic"
      },
      { sex: "Male", name: "Mark", city: "Austin", car: "Nissan Altima" }
    ]
  };
  render() {
    return (
      <Container>
        <ReactTable
          filterable
          data={this.state.rows}
          columns={this.state.columns}
          style={{ width: 900, color: "white", background: "#0A1825" }}
        />
      </Container>
    );
  }
}

export default Relatorios;
