let month = {
    columns : 7,
    rows : 5
}

let arrangement = {
    columns : 3,
    rows : 4
}

let margins = {
    day : 1,
    month : {columns : 4, rows : 1}
}

function print(arg){
    process.stdout.write(arg)
}

let getDaySubpiece = function(dayOfMonth){
    let subpiece = String(dayOfMonth)
    if(subpiece.length < 2){
        subpiece = " " + subpiece
    }
    return subpiece
}

let printYearDay = function(dayOfYear){
    let columnsPerRow = 28

    let column = dayOfYear % columnsPerRow
    let row = (dayOfYear - column) / columnsPerRow

    if(column == columnsPerRow - 1){
        print('\n')
        if(row % 4 == 3){
            print('\n')
        }
        return
    }


    let weekRow = row % 4
    let weekStartDay = weekRow * 7

    let dayOffset = column % 7
    let day = weekStartDay + dayOffset + 1


    print(getDaySubpiece(day) + " ")

    if(dayOffset == 6){
        print("  ")
    } 
}

function printCalendar(){
    for(let i = 0; i < 365; i++){
        printYearDay(i)
    }
}

printCalendar()