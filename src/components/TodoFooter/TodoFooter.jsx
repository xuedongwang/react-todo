import React from 'react';
import { Footer } from './style';

const TodoFooter = () => (
  <Footer>
    <ul className="footer-content">
      <li className="footer-item">Double-click to edit a todo</li>
      <li className="footer-item">Written by <a className="footer-item__link" href="">XueDong Wang</a></li>
      <li className="footer-item">Design by <a href="//todomvc.com/" className="footer-item__link">TodoMVC</a></li>
    </ul>
  </Footer>
);

export default TodoFooter;
