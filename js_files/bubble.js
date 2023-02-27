async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    //write your code here
    //console.log(ele.length);
    for(let i=0; i<ele.length-1; i++)
    {
        for(let j=0; j<ele.length-i-1; j++)
        {
            ele[j].style.background="red";
            ele[j+1].style.background="red";
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
               
            }
            ele[j].style.background="blue";
            ele[j+1].style.background="blue";
        }
        ele[ele.length-1-i].style.background="green";
    }
    
    //console.log(ele.values);
    ele[0].style.background="green";
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
