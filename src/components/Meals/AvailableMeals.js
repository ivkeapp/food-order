import classes from './AvailableMeals.module.css';

const DUMMY_DATA = [
  {
    id: '1',
    name: 'Suši',
    description: 'Kvalitetni i sveža riba',
    price: 1290.00,
  },
  {
    id: '2',
    name: 'Šnicla',
    description: 'Nemački specijalitet!',
    price: 890.00,
  },
  {
    id: '3',
    name: 'Klopa Burger',
    description: 'Debeli američki burger',
    price: 520.00,
  },
  {
    id: '4',
    name: 'Cezar salata',
    description: 'Sveža i hranljiva, a zdrava',
    price: 690.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_DATA.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;