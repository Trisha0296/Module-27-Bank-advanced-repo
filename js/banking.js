/* video-01 */
// page taaa js ar satha  chanact hoice ki na dakhar jonno
/* // console.log('banking js added') */

/* video-05 */
// (advanced) Common function to reduce code repeat

/* 01-advanced */
function getInputValue(inputId) {
  const InputField = document.getElementById(inputId);
  const inputAmountText = InputField.value;
  const Amount = parseFloat(inputAmountText);

  // clear input field
  InputField.value = ' ';

  return Amount;
}

/* video-02 */
// step-1
/* 01-advanced*/
document.getElementById('deposit-button').addEventListener('click', function () {
  //  check deposit-button
  // console.log('deposit click handler')
  // step-2
  // ,const depositInput = document.getElementById('deposit-input');
  // console.log(depositInput);
  //, const depositAmountText = depositInput.value;
  //, const depositAmount = parseFloat(depositAmountText);
  // console.log(depositAmount);
  // step-03


  /* 01-advanced*/
  const depositAmount = getInputValue('deposit-input');
  /* 01-advanced*/



  // get current deposit
  const depositTotal = document.getElementById('deposit-total');
  const deposittotalText = depositTotal.innerText;
  /* video-03 */
  // step-04
  const previousDepositTotal = parseFloat(deposittotalText);
  depositTotal.innerText = previousDepositTotal + depositAmount;
  // console.log(deposittotalText);

  // step-5
  // update balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;

  // // clear input field
  // , depositInput.value = ' ';
});
/* video-04 */
// step-01




/* 01-advanced */
/* // handle withdraw-button */
document.getElementById('withdraw-button').addEventListener('click', function () {
  // console.log("withdraw-button check")
  // step-02
  // ,const withdrawInput = document.getElementById('withdraw-input');
  //, const withdrawAmountText = withdrawInput.value;
  // console.log(withdrawAmountText);
  // step-04
  // , const withdrawAmount = parseFloat(withdrawAmountText);
  // step-03



  /* 01-advanced */
  const withdrawAmount = getInputValue('withdraw-input')
  /* 01-advanced */

  // update withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previouswithdrawTotalText = withdrawTotal.innerText;
  // step-04
  const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
  // step-03
  withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;




  // update blance after withdraw
  // step-01
  const balanceTotal = document.getElementById('balance-total');
  // step-02
  const balanceTotalText = balanceTotal.innerText;
  // step-03
  const previousBalanceTotal = parseFloat(balanceTotalText);
  // step-04
  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

  /* 01-advanced */
  // clear withdraw  input field
  //,, withdrawInput.value = ' ';
  /* 01-advanced */
})
/* video-05 */
// (advanced) Common function to reduce code repeat