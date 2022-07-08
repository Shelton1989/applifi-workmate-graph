"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRequestResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueRequestArgs_1 = require("./args/FindUniqueRequestArgs");
const Request_1 = require("../../../models/Request");
const helpers_1 = require("../../../helpers");
let FindUniqueRequestResolver = class FindUniqueRequestResolver {
    async request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRequestArgs_1.FindUniqueRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRequestResolver.prototype, "request", null);
FindUniqueRequestResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], FindUniqueRequestResolver);
exports.FindUniqueRequestResolver = FindUniqueRequestResolver;
