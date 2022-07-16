"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Request_1 = require("../../../models/Request");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let RequestRelationsResolver = class RequestRelationsResolver {
    async Reporter(request, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).request.findUnique({
            where: {
                id: request.id,
            },
        }).Reporter({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Request_1.Request, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestRelationsResolver.prototype, "Reporter", null);
RequestRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], RequestRelationsResolver);
exports.RequestRelationsResolver = RequestRelationsResolver;
