import React from 'react';

const Sidebar = ({ categories }) => {
  return (
    <aside>
      <h2>Categorias</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}><a href={`/${category.slug}`}>{category.name}</a></li>
        ))}
      </ul>
      {/* Informações adicionais podem ser adicionadas aqui */}
    </aside>
  );
}

export default Sidebar;
