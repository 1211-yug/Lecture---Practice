#include<iostream>

using namespace std;

class Name{
    
    public:
        string name;
    
        void nm(){
            cout << "Enter your name :- ";
            cin >> name;
        }
    
};


class Rollno : public Name{
    
    public:
        int rollno;
    
        void RollNo(){
            cout << "Enter your Roll Number :- ";
            cin >> rollno;
        }
    
};

class print : public Rollno{
  
  public:
  
    void printName(){
            cout << "your name is " << name << "." << endl; 
        }
  
     void printRollNo(){
            cout << "Your Roll Number is " << rollno << "." << endl; 
        }
    
};

int main(){
    
    print p1;
    
    p1.nm();
    p1.RollNo();
    
    p1.printName();
    p1.printRollNo();
    
    return 0;
}