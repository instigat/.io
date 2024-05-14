toggle = 0
#MaxThreadsPerHotkey 2

M::
Toggle := !Toggle
While Toggle{
send E
sleep 30
}
return