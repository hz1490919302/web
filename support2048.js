function getPosTop(i, j) {
    return 20 + i * 120;
}

function getPosLeft(i, j) {
    return 20 + j * 120;
}


//������������ֵ�ʱ���ж�16�������Ƿ��пռ�
function nospace(board) {
    for ( var i = 0; i < 4; i++) 
        for ( var j = 0; j < 4; j++) 
            if (board[i][j] == 0)
                return false;
    return true;
}

//ʵ�ֹ����ж�
function canMoveLeft( board ){
    for(var i = 0;i<4;i++)
        for(var j = 1;j<4;j++)
            if( board[i][j] !=0 )
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j])
                    return true;
                    
    return false;
}//�ж�ˮƽ�����Ƿ����ϰ���
function noBlockHorizontal(row, col1, col2, board){
    for(var i = col1 + 1; i<col2; i++)
        if(board[row][i]!=0)
            return false;
    return true;
}//�����β

function noBlockHorizontaL(col, row1, row2, board){
    for(var i = row1 + 1; i<row2; i++)
        if(board[i][col]!=0)
            return false;
    return true;
}

function nomove(board){
    if(canMoveLeft(board)|| canMoveRight(board)||canMoveUp(board)||canMoveDown(board))
        return false;
    return true;
}

function canMoveRight( board ){
    for(var i = 0;i<4;i++)
        for(var j = 0;j<3;j++)
            if( board[i][j] !=0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j])
                    return true;
                    
    return false;
}

function canMoveUp( board ){
    for(var  j= 0;j<4;j++)
        for(var i = 1;i<4;i++)
            if( board[i][j] !=0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j])
                    return true;
                    
    return false;
}

function canMoveDown(board) {  
    for (var j = 0; j < 4; j++)  
        for (var i = 0; i < 3; i++)  
            if (board[i][j] != 0)  
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j])  
                    return true;  
    return false;  
}  
  




