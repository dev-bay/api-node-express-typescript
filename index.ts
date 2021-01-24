import * as express from 'express';
import * as bodyParser from 'body-parser';

 
const app = express();
const PORT = 3010;
 
app.use(bodyParser.json());
 
app.get("/", (req, res, next) => {
  res.send("PUBLIC API");
  next();
});

import { Employee, calcSumOfNetSaleries } from './mapper';

app.post('/sum-net-salaries', (req, res, next) => {
  const employees: Employee[] = req.body;
  const result: number = calcSumOfNetSaleries(employees);

  res.send({ sum: result });

  next();
});
 
app.listen(PORT);

console.log(`Serven listen on port: ${PORT}`)