#include<iostream>

using namespace std;

class Student{
	
	private:
		
		int id,age;
		string name,course,city,email,collage;
	
	public:
		
		void Stu_id(int id){
			this->id = id;
		}
		
		void Stu_age(int age){
			this->age = age;
		}
		
		void Stu_name(string name){
			this->name = name;
		}
		
		void Stu_course(string course){
			this->course = course;
		}
		
		void Stu_city(string city){
			this->city = city;
		}
		
		void Stu_email(string email){
			this->email = email;
		}
		
		void Stu_collage(string collage){
			this->collage = collage;
		}
		
		void print_Stu_info(){
		
			cout << "Stu_id :- " << id << endl; 
			cout << "Stu_name :- " << name << endl; 
			cout << "Stu_age :- " << age << endl; 
			cout << "Stu_course :- " << course << endl; 
			cout << "Stu_city :- " << city << endl; 
			cout << "Stu_email :- " << email << endl; 
			cout << "Stu_collage :- " << collage << endl; 
			cout << "-------------------------------" << endl;
		
		}
};

int main(){
	
	Student s1,s2,s3,s4,s5;
	
	s1.Stu_id(1);
	s1.Stu_name("krishna");
	s1.Stu_age(19);
	s1.Stu_course("devloper");
	s1.Stu_city("surat");
	s1.Stu_email("krishna223@gmail.com");
	s1.Stu_collage("rnw");
	s1.print_Stu_info();

	s2.Stu_id(2);
	s2.Stu_name("krishna");
	s2.Stu_age(23);
	s2.Stu_course("devloper");
	s2.Stu_city("surat");
	s2.Stu_email("krishna223@gmail.com");
	s2.Stu_collage("rnw");
	s2.print_Stu_info();
	
	s3.Stu_id(3);
	s3.Stu_name("krishna");
	s3.Stu_age(29);
	s3.Stu_course("devloper");
	s3.Stu_city("surat");
	s3.Stu_email("krishna223@gmail.com");
	s3.Stu_collage("rnw");
	s3.print_Stu_info();
	
	s4.Stu_id(4);
	s4.Stu_name("krishna");
	s4.Stu_age(30);
	s4.Stu_course("devloper");
	s4.Stu_city("surat");
	s4.Stu_email("krishna223@gmail.com");
	s4.Stu_collage("rnw");
	s4.print_Stu_info();
	
	s5.Stu_id(5);
	s5.Stu_name("krishna");
	s5.Stu_age(21);
	s5.Stu_course("devloper");
	s5.Stu_city("surat");
	s5.Stu_email("krishna223@gmail.com");
	s5.Stu_collage("rnw");
	s5.print_Stu_info();
	
	return 0;
}
