import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_DATA = [
  {
    id: '1',
    name: 'Suši',
    description: 'Kvalitetna i sveža riba',
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
  const mealsList = DUMMY_DATA.map((meal) => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
  );
};

export default AvailableMeals;