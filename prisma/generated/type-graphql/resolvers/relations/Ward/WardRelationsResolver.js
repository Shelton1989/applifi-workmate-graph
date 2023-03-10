"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const User_1 = require("../../../models/User");
const Ward_1 = require("../../../models/Ward");
const WardUsersArgs_1 = require("./args/WardUsersArgs");
const helpers_1 = require("../../../helpers");
let WardRelationsResolver = class WardRelationsResolver {
    async Users(ward, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.findUnique({
            where: {
                id: ward.id,
            },
        }).Users(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Ward_1.Ward, Object, WardUsersArgs_1.WardUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardRelationsResolver.prototype, "Users", null);
WardRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], WardRelationsResolver);
exports.WardRelationsResolver = WardRelationsResolver;
