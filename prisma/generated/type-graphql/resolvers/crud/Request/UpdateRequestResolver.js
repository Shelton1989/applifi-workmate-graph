"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateRequestArgs_1 = require("./args/UpdateRequestArgs");
const Request_1 = require("../../../models/Request");
const helpers_1 = require("../../../helpers");
let UpdateRequestResolver = class UpdateRequestResolver {
    async updateRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRequestArgs_1.UpdateRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateRequestResolver.prototype, "updateRequest", null);
UpdateRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], UpdateRequestResolver);
exports.UpdateRequestResolver = UpdateRequestResolver;
