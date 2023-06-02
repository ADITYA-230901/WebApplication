import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';
// surpriseMePrompts is an array that contains 50 values 
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);//it will give a random number from 0 to 49
  const randomPrompt = surpriseMePrompts[randomIndex];//It will select the array value at particular index.

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);//using filesaver library to save photo and its id
}