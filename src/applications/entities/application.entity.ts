import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { v4 as uuid } from 'uuid';
import { HydratedDocument } from 'mongoose';

export type ApplicationDocument = HydratedDocument<Application>;

const options: SchemaOptions = {
    timestamps: true,
};

enum SupportedDevice {
    MOBILE = 'mobile',
    TABLET = 'tablet',
    DESKTOP = 'desktop',
}

enum Vendor {
    // 애플 앱 스토어
    APPLE = 'apple',
    // 구글 플레이스토어
    GOOGLE = 'google',
}

enum PricingPolicy {
    FREE = 'free',
    SUBSCRIPTION = 'subscription',
    PURCHASE = 'purchase',
}

@Schema(options)
export class Application {
    // 앱 고유 아이디
    @Prop({
        unique: true,
        default: () => uuid(),
    })
    id: string;

    // 앱 이름
    @Prop({ required: true })
    name: string;

    // 앱 설명
    @Prop()
    description: string;

    // 앱 아이콘
    @Prop({ required: true })
    appIcon: string;

    // 앱 썸네일리스트
    @Prop()
    thumbnailList: string[];

    // 앱 점수
    @Prop({ default: 0 })
    score: number;

    // 앱 개발자
    @Prop()
    developer: string;

    // 앱의 카테고리
    @Prop()
    category: string;

    // 앱이 올라오는 마켓
    @Prop({ default: [], enum: Vendor })
    vendorList: string[];

    // 앱이 지원하는 기기 종류
    @Prop({ default: [], enum: SupportedDevice })
    supportedDeviceList: string[];

    // 앱이 지원하는 언어 종류
    @Prop()
    supportLanguageList: string[];

    @Prop({
        enum: PricingPolicy,
    })
    pricingPolicy: string;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
