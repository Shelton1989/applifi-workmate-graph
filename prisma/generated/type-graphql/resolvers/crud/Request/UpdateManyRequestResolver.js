"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyRequestArgs_1 = require("./args/UpdateManyRequestArgs");
const Request_1 = require("../../../models/Request");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyRequestResolver = class UpdateManyRequestResolver {
    async updateManyRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRequestArgs_1.UpdateManyRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyRequestResolver.prototype, "updateManyRequest", null);
UpdateManyRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], UpdateManyRequestResolver);
exports.UpdateManyRequestResolver = UpdateManyRequestResolver;
