"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateNotificationArgs_1 = require("./args/CreateNotificationArgs");
const Notification_1 = require("../../../models/Notification");
const helpers_1 = require("../../../helpers");
let CreateNotificationResolver = class CreateNotificationResolver {
    async createNotification(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).notification.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Notification_1.Notification, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateNotificationArgs_1.CreateNotificationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateNotificationResolver.prototype, "createNotification", null);
CreateNotificationResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Notification_1.Notification)
], CreateNotificationResolver);
exports.CreateNotificationResolver = CreateNotificationResolver;
