import React from "react";
import { Card } from "react-bootstrap";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Home from "./components/pages/home/Home";
import TodoList from "./components/pages/todoList/TodoList";
const App = () => {
  return (
    <Card style={{minHeight:'100vh'}}>
      <Card.Header  className="p-0">
        <Header />
      </Card.Header>
      <Card.Body  className="p-0">
        {/* <Home /> */}
        <TodoList />
      </Card.Body>
      <Card.Footer  className="p-0">
        <Footer />
      </Card.Footer>
    </Card>
  );
}

export default App;
