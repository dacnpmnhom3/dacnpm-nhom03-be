
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
const PROTO_PATH = "./config/adminGrpc.proto";

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const AdminService = grpc.loadPackageDefinition(packageDefinition).AdminService;

const grpcClient = new AdminService(
    "localhost:50051",
    grpc.credentials.createInsecure()
);

export default grpcClient;