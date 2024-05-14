#SingleInstance Force
#MaxHotkeysPerInterval 99999
#MaxThreadsPerHotkey 2
 
lmb = 0
rmb = 0
 
[::
lmb := !lmb
if (!lmb)
{
    click up
}
else
{
    click down
}
return
 
]::
rmb := !rmb
if (!rmb)
{
    click up right
}
else
{
    click down right
}
return