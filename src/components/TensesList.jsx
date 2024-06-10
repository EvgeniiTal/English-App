import { Card } from './Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTenses } from '../redux/tenses-slice';


export const TensesList = () => {
  const dispatch = useDispatch();
  const tenses = useSelector(state => state.tenses.tenses);

  useEffect(() => {
    dispatch(fetchTenses());
  }, [dispatch]);

  tenses.map((tense) => {
    console.log(tense.name);
  });

  return (
    <>
      {tenses.map((tense) => (
        <Card key={tense.id} title={tense.name} />
      ))}
    </>
  );
}
