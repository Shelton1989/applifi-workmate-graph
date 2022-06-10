"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstNotificationSettingsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstNotificationSettingsArgs_1 = require("./args/FindFirstNotificationSettingsArgs");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const helpers_1 = require("../../../helpers");
let FindFirstNotificationSettingsResolver = class FindFirstNotificationSettingsResolver {
    async findFirstNotificationSettings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notificationSettings.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => NotificationSettings_1.NotificationSettings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNotificationSettingsArgs_1.FindFirstNotificationSettingsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstNotificationSettingsResolver.prototype, "findFirstNotificationSettings", null);
FindFirstNotificationSettingsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => NotificationSettings_1.NotificationSettings)
], FindFirstNotificationSettingsResolver);
exports.FindFirstNotificationSettingsResolver = FindFirstNotificationSettingsResolver;
