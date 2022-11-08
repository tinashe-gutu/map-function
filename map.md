function:
    name: map
        params: INPUT_ARR -     array
        params: CALLBACK_FN - function
        returns: array
==========================================
psuedo-code:
    declare RESULT_ARR as empty array
    for(each ELEMENT of INPUT_ARR):
        add CALLBACK_FN(ELEMENT) to RESULT_ARR
    endfor
    return RESULT_ARR