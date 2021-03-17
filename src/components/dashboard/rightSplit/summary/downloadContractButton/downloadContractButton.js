import {
  Canvas,
  Document,
  Page,
  Text,
  Image,
  View,
  BlobProvider,
} from '@react-pdf/renderer';
import ReactHtmlParser from 'react-html-parser';
import { memo } from 'react';
import styles from './_/styles';
import List from './_/list/list';
import PDFContentParser from './_/PDFContentParser';
import contractData from './contractData';
import SmartSplit from './_/assets/smartsplit.png';

export default memo(({ language }) => {
  const t_download = {
    fr: "Télécharger l'entente",
    en: 'Download the contract',
  }[language];
  return (
    <div>
      <BlobProvider document={<Contract />}>
        {({ blob, url, loading, error }) => {
          return (
            !loading &&
            !error && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(url);
                }}
              >
                {t_download}
              </button>
            )
          );
        }}
      </BlobProvider>
    </div>
  );
});

export const Contract = () => {
  return (
    <Document>
      {/* <svg width="384" height="384" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z" fill="#55F2BA" stroke="white" stroke-width="1"></path><path d="M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z" fill="#F2BE3D" stroke="white" stroke-width="1"></path><circle cx="192" cy="192" r="96" fill="#FFFFFF"></circle><g scale="1" transform="translate(128 128)"><svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9993 64C15.9993 37.4904 37.4896 16 63.9993 16C90.509 16 111.999 37.4904 111.999 64C111.999 90.5097 90.509 112 63.9993 112C37.4896 112 15.9993 90.5097 15.9993 64ZM63.9993 5.33337C31.5986 5.33337 5.33264 31.5993 5.33264 64C5.33264 96.4007 31.5986 122.667 63.9993 122.667C96.4 122.667 122.666 96.4007 122.666 64C122.666 31.5993 96.4 5.33337 63.9993 5.33337ZM51.7705 76.2285C45.0167 69.4747 45.0167 58.5246 51.7705 51.7708C58.5243 45.017 69.4743 45.017 76.2281 51.7708C78.3109 53.8536 81.6878 53.8536 83.7706 51.7708C85.8534 49.688 85.8534 46.3112 83.7706 44.2284C72.8512 33.309 55.1474 33.309 44.228 44.2284C33.3086 55.1478 33.3086 72.8516 44.228 83.771C55.1474 94.6903 72.8512 94.6903 83.7706 83.771C85.8534 81.6882 85.8534 78.3113 83.7706 76.2285C81.6878 74.1457 78.3109 74.1457 76.2281 76.2285C69.4743 82.9823 58.5243 82.9823 51.7705 76.2285Z" fill="#DCDFE1" scale="1"></path></svg></g></g></svg>*/}
      <Page size="A4" style={styles.page} key={Math.random()}>
        <View style={styles.header} key={Math.random()}>
          <Image src={SmartSplit} style={{ width: '38%', marginBottom: 8 }} />
          {PDFContentParser(ReactHtmlParser(contractData.header))}
        </View>
        <Canvas
          style={{ height: 192, width: 192 }}
          paint={(painter) =>
            painter
              .lineWidth(1)
              .scale(0.5)
              .path('M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z')
              .fill('#55F2BA')
              .path('M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z')
              .stroke('white')
              .path(
                'M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z',
              )
              .fill('#F2BE3D')
              .path(
                'M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z',
              )
              .stroke('white')
              .circle(192, 192, 96)
              .fill('white')
              .path(
                'M15.9993 64C15.9993 37.4904 37.4896 16 63.9993 16C90.509 16 111.999 37.4904 111.999 64C111.999 90.5097 90.509 112 63.9993 112C37.4896 112 15.9993 90.5097 15.9993 64ZM63.9993 5.33337C31.5986 5.33337 5.33264 31.5993 5.33264 64C5.33264 96.4007 31.5986 122.667 63.9993 122.667C96.4 122.667 122.666 96.4007 122.666 64C122.666 31.5993 96.4 5.33337 63.9993 5.33337ZM51.7705 76.2285C45.0167 69.4747 45.0167 58.5246 51.7705 51.7708C58.5243 45.017 69.4743 45.017 76.2281 51.7708C78.3109 53.8536 81.6878 53.8536 83.7706 51.7708C85.8534 49.688 85.8534 46.3112 83.7706 44.2284C72.8512 33.309 55.1474 33.309 44.228 44.2284C33.3086 55.1478 33.3086 72.8516 44.228 83.771C55.1474 94.6903 72.8512 94.6903 83.7706 83.771C85.8534 81.6882 85.8534 78.3113 83.7706 76.2285C81.6878 74.1457 78.3109 74.1457 76.2281 76.2285C69.4743 82.9823 58.5243 82.9823 51.7705 76.2285Z',
              )
              .translate(128, 128)
              .fill('#DCDFE1')
          }
        />
        <Canvas
          style={{ height: 192, width: 192 }}
          paint={(painter) =>
            painter
              .lineWidth(1)
              .scale(0.5)
              .path('M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z')
              .fill('#55F2BA')
              .path('M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z')
              .stroke('white')
              .path(
                'M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z',
              )
              .fill('#F2BE3D')
              .path(
                'M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z',
              )
              .stroke('white')
              .circle(192, 192, 96)
              .fill('white')
              .path(
                'M15.9999 64C15.9999 37.4904 37.4903 16 63.9999 16C90.5096 16 112 37.4904 112 64C112 90.5097 90.5096 112 63.9999 112C37.4903 112 15.9999 90.5097 15.9999 64ZM63.9999 5.33337C31.5992 5.33337 5.33325 31.5993 5.33325 64C5.33325 96.4007 31.5992 122.667 63.9999 122.667C96.4006 122.667 122.667 96.4007 122.667 64C122.667 31.5993 96.4006 5.33337 63.9999 5.33337ZM66.3694 34.7766C65.9117 33.8902 64.9976 33.3334 64 33.3334C63.0024 33.3334 62.0883 33.8902 61.6306 34.7766L53.1999 51.1035L34.2977 53.7446C33.2789 53.8869 32.4328 54.6026 32.1234 55.5837C31.8141 56.5648 32.0966 57.6363 32.8495 58.3373L46.4517 71.002L43.2472 88.8624C43.0689 89.8566 43.4675 90.8661 44.2768 91.4703C45.0862 92.0745 46.1674 92.1696 47.0698 91.7159L64 83.2048L80.9303 91.7159C81.8326 92.1696 82.9139 92.0745 83.7232 91.4703C84.5326 90.8661 84.9311 89.8566 84.7528 88.8624L81.5483 71.002L95.1505 58.3373C95.9034 57.6363 96.1859 56.5648 95.8766 55.5837C95.5672 54.6026 94.7212 53.8869 93.7024 53.7446L74.8001 51.1035L66.3694 34.7766Z',
              )
              .translate(128, 128)
              .fill('#DCDFE1')
          }
        />
        <Canvas
          style={{ height: 192, width: 192 }}
          paint={(painter) =>
            painter
              .lineWidth(1)
              .scale(0.5)
              .path('M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z')
              .fill('#55F2BA')
              .path('M192,192 L192,0 A192,192 0 1,1 191.99999999999994,384 z')
              .stroke('white')
              .path(
                'M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z',
              )
              .fill('#F2BE3D')
              .path(
                'M192,192 L191.99999999999994,384 A192,192 0 1,1 192.0000000000001,0 z',
              )
              .stroke('white')
              .circle(192, 192, 96)
              .fill('white')
              .path(
                'M15.9997 64C15.9997 37.4904 37.49 16 63.9997 16C90.5093 16 112 37.4904 112 64C112 90.5097 90.5093 112 63.9997 112C37.49 112 15.9997 90.5097 15.9997 64ZM63.9997 5.33337C31.599 5.33337 5.33301 31.5993 5.33301 64C5.33301 96.4007 31.599 122.667 63.9997 122.667C96.4004 122.667 122.666 96.4007 122.666 64C122.666 31.5993 96.4004 5.33337 63.9997 5.33337ZM47.9997 32C46.5852 32 45.2286 32.5619 44.2284 33.5621C43.2282 34.5623 42.6663 35.9189 42.6663 37.3334V90.6667C42.6663 93.6122 45.0542 96 47.9997 96C50.9452 96 53.333 93.6122 53.333 90.6667V74.6667H69.333C81.1151 74.6667 90.6663 65.1155 90.6663 53.3334C90.6663 41.5513 81.1151 32 69.333 32H47.9997ZM69.333 64H53.333V42.6667H69.333C75.224 42.6667 79.9997 47.4423 79.9997 53.3334C79.9997 59.2244 75.224 64 69.333 64Z',
              )
              .translate(128, 128)
              .fill('#DCDFE1')
          }
        />
        <View fixed key={Math.random()} style={styles.footer}>
          <Text
            fixed
            render={({ pageNumber, totalPages }) =>
              `- Page ${pageNumber} / ${totalPages}`
            }
          />
          <Text> </Text>
          {PDFContentParser(ReactHtmlParser(contractData.footer))}
        </View>
      </Page>
      {/* <Page size="A4" style={styles.page} key={Math.random()}>
        <View style={styles.section} key={Math.random()}>
          {PDFContentParser(
            ReactHtmlParser(
              contractData.sections.agreementConditions.description,
            ),
          )}
          <View key={Math.random()}>
            {PDFContentParser(
              ReactHtmlParser(
                contractData.sections.agreementConditions.copyright.title,
              ),
            )}
          </View>
          <List type="numeral" key={Math.random()}>
            {ReactHtmlParser(
              contractData.sections.agreementConditions.copyright.content,
            )}
          </List>
          <View key={Math.random()}>
            {PDFContentParser(
              ReactHtmlParser(
                contractData.sections.agreementConditions.performance.title,
              ),
            )}
          </View>
          <List type="numeral" start={1} key={Math.random()}>
            {ReactHtmlParser(
              contractData.sections.agreementConditions.performance.content,
            )}
          </List>
          <View key={Math.random()}>
            {PDFContentParser(
              ReactHtmlParser(
                contractData.sections.agreementConditions.recording.title,
              ),
            )}
          </View>
          <List type="numeral" start={2} key={Math.random()}>
            {ReactHtmlParser(
              contractData.sections.agreementConditions.recording.content,
            )}
          </List>
        </View>
        <View fixed key={Math.random()} style={styles.footer}>
          <Text
            fixed
            render={({ pageNumber, totalPages }) =>
              `- Page ${pageNumber} / ${totalPages}`
            }
          />
          <Text> </Text>
          {PDFContentParser(ReactHtmlParser(contractData.footer))}
        </View>
      </Page>
      <Page size="A4" style={styles.page} key={Math.random()}>
        <View style={styles.section} key="recommendations">
          {PDFContentParser(
            ReactHtmlParser(contractData.sections.recommendations),
          )}
        </View>
        <View style={styles.section} key="moralRights">
          {PDFContentParser(ReactHtmlParser(contractData.sections.moralRights))}
        </View>
        <View style={styles.section} key="otherConditions">
          {PDFContentParser(
            ReactHtmlParser(contractData.sections.otherConditions),
          )}
        </View>
        <View style={styles.section} key="signatures">
          {PDFContentParser(
            ReactHtmlParser(contractData.sections.signatures.text),
          )}
          <View style={styles.row} key={Math.random()}>
            {contractData.sections.signatures.signatories.map((signatory) => {
              return (
                <View style={styles.signatoryContainer} key={Math.random()}>
                  <View style={styles.signatureBox} />
                  {PDFContentParser([signatory])}
                </View>
              );
            })}
          </View>
        </View>
        <View fixed key={Math.random()} style={styles.footer}>
          <Text
            fixed
            render={({ pageNumber, totalPages }) =>
              `- Page ${pageNumber} / ${totalPages}`
            }
          />
          <Text> </Text>
          {PDFContentParser(ReactHtmlParser(contractData.footer))}
        </View>
      </Page>*/}
    </Document>
  );
};
