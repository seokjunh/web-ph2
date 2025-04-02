export async function fetchNotice(page: string) {
  const response = await fetch(
    `http://localhost:8080/api/notice/list?page=${page}`,
  );
  const data = await response.json();
  console.log(data);
  return data;
}
