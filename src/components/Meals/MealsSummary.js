import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
    <h2>Dostava ukusne klope</h2>
    <p>
        Izaberite omiljeni obrok iz naše velike ponude i uživajte u ukusnoj klopi.
    </p>
    <p>
        Svi naši obroci su spremljeni sa visoko-kvalitetnim sastojcima od strane iskusnih kuvara.
    </p>
  </section>
  );
}

export default MealsSummary;
