#include<iostream>

using namespace std;

int main(){
	
	int size,sum;
	int a[50],b[50],c[50];
	 
	cout << "Enter array size :- ";
	cin >> size;
	
	cout << "Enter array A's elements :- " << endl;
	for(int i=0 ; i<size ; i++){
		cout << "a[" << i << "] = ";
		cin >> a[i];
	}
	
	cout << "Enter array B's elements :- " << endl;
	for(int i=0 ; i<size ; i++){
		cout << "b[" << i << "] = ";
		cin >> b[i];
	}
	
	for(int i=0 ; i<size ; i++)
    {
        c[i] = a[i] + b[i];
    }

	
	cout << "Array C is :- ";
	for(int i=0 ; i<size ; i++){
		cout << c[i];
	}
	
	return 0;
}