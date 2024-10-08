import mongoose from "mongoose";

const User = new mongoose.Schema({
  FullName: String,
  FatherName: String,
  PersonalNumber: Number,
  BirthDate: String,
  Education: String,
  Job: String,
  Nationality: String,
  TellPhone: Number,
  CellPhone: Number,
  BankAccount: String,
  PostalCode: String,
  HomeAddress: String,
  OfficeAddress: String,
  ReliefCommittee: Boolean,
  PublicAssistance: Boolean,
  SelfSufficiency: Boolean,
  HomeStatus: Number,
  MonthlyIncome: Number,
  CarStatus: Boolean,
  CarType: Boolean,
  Others: String,
  FamilyInfo: [
    {
      FirstName: String,
      LastName: String,
      ParentName: String,
      PersonalNumber: Number,
      BirthDate: String,
      Proportion: String,
      MaritalStatus: Boolean,
      Job: String,
      Education: String,
    },
  ],
});

export default mongoose.model("User", User);
