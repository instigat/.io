z::
KeyDown := !KeyDown
SendInput {w}
Sleep, 30
If KeyDown
	SendInput {w down}
Else
	SendInput {w up}
Return