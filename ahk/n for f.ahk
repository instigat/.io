N::
KeyDown := !KeyDown
SendInput {F}
Sleep, 30
If KeyDown
	SendInput {F down}
Else
	SendInput {F up}
Return