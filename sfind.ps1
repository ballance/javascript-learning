function sfind {
param(
    [string] $stringToFind
    ) 

    $input | select-string -Pattern $stringToFind
}

sfind $input