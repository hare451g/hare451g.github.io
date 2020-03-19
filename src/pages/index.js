import React from 'react';
import AppLayout from '../layouts/AppLayout';

function IndexPage() {
  return (
    <AppLayout>
      <h3>Threads</h3>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </li>
          <li>
            <a href="#">About</a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </li>
          <li>
            <a href="#">Clients</a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </li>
          <li>
            <a href="#">Contact Us</a>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </li>
        </ul>
      </nav>
    </AppLayout>
  );
}

export default IndexPage;
