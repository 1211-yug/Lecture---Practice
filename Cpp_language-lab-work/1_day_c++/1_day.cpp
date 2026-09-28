#include<iostream>

using namespace std;

int main(){
	
	int size;
	int a[100];
	
	cout << "Enter array size :- ";
	cin >> size;
	
	cout << "Enter array elements :-" << endl ;
	for(int i=0 ; i<size ; i++){
		cout << "a[" << i << "] " << "= ";
        cin >> a[i];
    }

	cout << "Length of an array :- " << size ;
	
	return 0;
}
