"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateNotificationSettingsArgs_1 = require("./args/CreateNotificationSettingsArgs");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const helpers_1 = require("../../../helpers");
let CreateNotificationSettingsResolver = class CreateNotificationSettingsResolver {
    async createNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateNotificationSettingsArgs_1.CreateNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateNotificationSettingsResolver.prototype, "createNotificationSettings", null);
CreateNotificationSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => NotificationSettings_1.NotificationSettings)
], CreateNotificationSettingsResolver);
exports.CreateNotificationSettingsResolver = CreateNotificationSettingsResolver;
