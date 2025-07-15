import { useState } from 'react';
import styles from './interest.module.css';

export default function BMI_Interest_Calculator(){

    const[calType, setCalType] = useState('Interest Calculator');

    //Iterest state
    const [principal, setPrincipal] = useState('');
    const [year, setYear] = useState('');
    const [loanType, setLoanType] = useState('');
    const [interest, setInterest] = useState('');
    const [calResult, setCalResult] = useState(0);

    //BMI state
    const [personWeight, setPersonWeight] = useState('');
    const [personHeight, setPersonHeight] = useState('');
    const [BMI, setBMI] = useState('');



    //Calculate the interest
    const calInterest = () =>{
        const interestResult = Number(principal) + (Number(principal) * Number(year) * Number(interest))/100;
        setCalResult(interestResult);
    }

    //Calculate BMI
    const calBMI = () => {
        const BMIresult = (Number(personWeight)/ (Number(personHeight)/100) ** 2).toFixed(1)
        if(BMIresult >= 25 && BMIresult <=29.9)
            return setBMI('Overweight');
        else if(BMIresult >= 30)
            return setBMI('Obese')
        else
            return setBMI('Perfect')
    }

    const bmiChangeColor = () =>{
        if(BMI === 'Obese'){
            return {color:'red'};
        }  
        else if(BMI === 'Overweight'){
            return {color: 'orange'}
        }  
        else
            return {color: 'green'}
    }
    
    return(<>
        <div className={styles.interestCalContainer}>
            
            <form action="" className={styles.interestCalForm} onSubmit={(event)=>event.preventDefault()}>


                {/* change two calculator  */}

                <div className={styles.changeCalculator}>
                    <button 
                        className={calType === 'Interest Calculator' ? styles.btnActive : styles.btnInActive} 
                        onClick={()=>setCalType('Interest Calculator')}>Interest Calculator</button>


                    <button 
                        className={calType === 'BMI Calculator' ? styles.btnActive : styles.btnInActive} 
                        onClick={()=>setCalType('BMI Calculator')}>BMI Calculator</button>
                </div>

                <div className={styles.interestHeader}>
                    <h1>{calType}</h1>
                </div>

                {
                    (calType === 'Interest Calculator' && 
                    <>
                        {/* Principal Amount */}
                        <div className={styles.row}>
                            <label htmlFor="principal">Principal</label>
                            <input 
                                type="number" 
                                id="principal" 
                                name="principal" 
                                value={principal}
                                placeholder="enter the principal amount"
                                onChange={(event)=> setPrincipal(event.target.value)}
                                required
                            />
                        </div>

                        {/* Year */}
                        <div className={styles.row}>
                            <label htmlFor="year">Year</label>
                            <input 
                                type="number" 
                                id="year" 
                                name="year" 
                                placeholder="enter the tenure year" 
                                value={year}
                                onChange={(event)=> setYear(event.target.value)}
                                required
                            />
                        </div>

                        {/* Loan Type */}
                        <div className={styles.row}>
                            <label htmlFor="type">Loan Type</label>
                            <select name="loanType" id="loanType" onChange={(event)=> setInterest(event.target.value)}>
                                <option value="">--- Choose the loan type ---</option>
                                <option value="8.9">Home Loan - 8.90%</option>
                                <option value="9.6">Personal Loan - 9.60%</option>
                                <option value="8.5">Car Loan - 8.50%</option>
                                <option value="8.3">Education Loan - 8.30%</option>
                                {/* <option value="Other">Other</option> */}
                            </select>
                        </div>

                        {/* Interest */}
                        <div className={styles.row}>
                            <label htmlFor="interest">Interest</label>
                            <input 
                                type="number" 
                                id="interest" 
                                name="interest" 
                                placeholder="interest amount"
                                value={interest}
                                // onChange={(event)=> setInterest(event.target.value)}
                                readOnly
                            />
                        </div>

                        <div className={styles.interestCalButton}>
                            <button onClick={()=>calInterest()}>Calculate</button>
                            <p>Total Amount:<span>₹ {calResult}.00</span></p>
                        </div>
                    </>
                    )
                }

                {
                    (calType === 'BMI Calculator' && 
                    <>
                        <div className={styles.row}>
                            <label htmlFor="weight">Person Weight (kgs)</label>
                            <input 
                                type="number" 
                                name="weight" 
                                id="weight" 
                                placeholder='enter your weight in kgs'
                                onChange={(event)=>setPersonWeight(event.target.value)}
                            />
                        </div>

                        <div className={styles.row}>
                            <label htmlFor="height">Person Height (cm)</label>
                            <input 
                                type="number" 
                                name="height" 
                                id="height" 
                                placeholder='enter your height in Centimeter (cm)'
                                onChange={(event)=> setPersonHeight(event.target.value)} 
                            />
                        </div>

                        <div className={styles.interestCalButton}>
                            <button onClick={()=>calBMI()}>Calculate BMI</button>
                            <p>BMI Result:
                                <span style={bmiChangeColor()}>{BMI}</span>
                            </p>
                        </div>
                    </>
                    )
                }
            </form>
        </div>
        
    </>)
}