import {
    Community,
    Keyword,
    MainMajor,
    Provider,
    User,
    UserCompetition,
    UserIntern,
    UserLanguage,
} from '@prisma/client';
import { CreateUserDTO } from '../apis/users/dto/create-user.dto';
import { Path, paths } from './crawiling/interface';
import { UpdateUserDTO } from '../apis/users/dto/update-user.dto';
import { GetCalendarDTO } from '../apis/users/dto/getCalendar.dto';
import { findPeriodThermometerDTO } from '../apis/users/dto/findPeriodThermometer.dtd';

export type email = {
    email: CreateUserDTO['email'];
};

export type calanderDateType = {
    year: string;
    month: string;
    path: paths['path'];
    data: calanderDataType;
};

export type getDdayType = {
    period: string;
};

export type getYearMonthDateType = {
    path: paths['path'];
    data: calanderDataType;
    year: string;
    month: string;
};

export type splitMapType = {
    date: string;
    path: paths['path'];
    year: string;
    month: string;
};

export type isYearMonthSameType = {
    yearMonthDate: Array<{
        startDate?: { dateYear: string; dateMonth: string; dateDay: string };
        closeDate?: { dateYear: string; dateMonth: string; dateDay: string };
        examDate?: { dateYear: string; dateMonth: string; dateDay: string };
    }>;
};

export type calanderDataType = {
    openDate: string;
    closeDate: string;
    examDate: string;
    examSchedules: string[];
    period: string;
    participationPeriod: string;
};

export type providerTokenType = {
    provider: string;
    token: string;
};

export type getScrapIdType = {
    id: User['id'];
    path: paths['path'];
};

export type idType = {
    id: User['id'];
};

export type yearMonthType = {
    year: string;
    month: string;
};

export type pathPageCountType = {
    path: Path['path'] | 'language';
    count?: string;
    page?: string;
};

export type phoneType = {
    phone: CreateUserDTO['phone'];
};

export type createDTOType = CreateUserDTO;

export type updateDTOType = UpdateUserDTO;

export type getCalendarDTOType = GetCalendarDTO;

export type validateTokenType = {
    token: number;
    phone: CreateUserDTO['phone'];
};

export type interestKeywordType = {
    interest: string;
    keyword: string[];
};

export type userProfileType = {
    email: User['email'];
    profileImage: User['profileImage'];
    nickname: User['nickname'];
    interestKeyword: interestKeywordType[];
};

export type pathIdtype = {
    path: Path['path'] | 'language';
    scrapId: string;
};

export type pathType = {
    path: string;
};

export type categoryType = {
    category: string;
};

export type classifyType = {
    classify: string;
};

export type findOneUserByIDType = {
    name: CreateUserDTO['name'];
    phone: CreateUserDTO['phone'];
};

export type nicknameType = {
    nickname: CreateUserDTO['nickname'];
};

export type authorization = {
    authorization: string;
};

export type cookie = {
    cookie: string;
};

export type emailProviderType = {
    email: CreateUserDTO['email'];
    provider: Provider;
};

export type updateThermometerType = {
    path: Path['path'] | 'language';
    createThermometer: {
        field: string;
        category: Community['category'];
        activeTitle: UserIntern['activeTitle'];
        activeContent: UserIntern['activeContent'];
        period?: UserIntern['period'];
        score?: UserLanguage['score'];
    };
    mainMajorId: MainMajor['id'];
    thermometerId?: string | undefined;
};

export type patchThermometerType = {
    path: Path['path'] | 'language';
    thermometerId: string;
    patchThermometer: {
        activeContent: UserIntern['activeContent'];
        period?: UserIntern['period'];
        score?: UserLanguage['score'];
    };
};

export type findPeriodThermometerType = {
    count?: findPeriodThermometerDTO['count'];
    page: findPeriodThermometerDTO['page'];
};
