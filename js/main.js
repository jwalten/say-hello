function onPress_ENTER()
{
        var keyPressed = event.keyCode || event.which;

        //if ENTER is pressed
        if(keyPressed==13)
        {
            alert('enter pressed');
            keyPressed=null;
        }
        else
        {
            return false;
        }
}
