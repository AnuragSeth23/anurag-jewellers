import UploadClient from './UploadClient';

export const metadata = {
  title: 'Admin Upload',
  robots: { index: false, follow: false },
};

export default function AdminUploadPage() {
  return <UploadClient />;
}
