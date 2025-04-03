export async function fetchNotice(page: string) {
  const response = await fetch(
    `http://ph2-backend:8080/api/notice/list?page=${page}`,
  );
  const data = await response.json();

  return data;
}
