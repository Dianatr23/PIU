export class Project {

  constructor(title: string,
              photo: string,
              creator: string,
              description: string,
              budget: number,
              category: string,
              year: number,
              date: string,
              hour: string,
              meetingDescription: string,
              votesNumber: number,
              zone: string,
              status: string,
              position: number) {
    this.photo = photo;
    this.title = title;
    this.creator = creator;
    this.description = description;
    this.budget = budget;
    this.category = category;
    this.year = year;
    this.meetingDate = date;
    this.meetingHour = hour;
    this.meetingDescription = meetingDescription;
    this.votesNumber = votesNumber;
    this.zone = zone;
    this.status = status;
    this.position = position;
  }

  title: string;
  photo: string;
  creator: string;
  description: string;
  category: string;
  year: number;
  budget: number;
  meetingDate : string;
  meetingHour: string;
  meetingDescription: string;
  votesNumber: number;
  zone: string;
  status: string;
  position: number;
}
