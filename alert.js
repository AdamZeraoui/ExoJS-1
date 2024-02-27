const cube = document.querySelector('#cube');
let style = window.getComputedStyle(cube);

var id = cube.getAttribute( 'id' );

function getInfoCube(){

    const idName = "Class = " + id +" \n";
    const backgroundColor = " - Background color = " + style.backgroundColor+ "\n";
    const color = " - Color = " + style.color + "\n"
    const height = " - Height = "+ style.height +"\n";
    const width = " - Width = " + style.width +"\n";
    const displayFlex  = " - Display = " + style.display + "\n";
    const fontFamilyFontSize = " - Font Family = " + style.fontFamily +" ( "+ style.fontSize+" )";
    alert (idName + backgroundColor + color + height + width + displayFlex + fontFamilyFontSize)
}
cube.addEventListener('click', function(){
    getInfoCube()
})