public class reverseArray{
public static void main(String [] args){
    int array [] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    for(int i = 0; i < array.length; i++){
        System.out.print(array[i] + " ");
    }
    //reverse
    for(int i = array.length - 1; i >= 0; i--){
        System.out.print(array[i] + " ");
    }
}

}